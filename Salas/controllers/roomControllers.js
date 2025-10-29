const Rooms = require("../models/roomModel");
const sequelize = require("../config/database");
const { Op } = require("sequelize");

function verifyInt(number) {
  const num = Number(number);
  const verify = num > 0 && Number.isInteger(num);
  return verify;
}

const getRooms = async (req, res, next) => {
  const { capacityMin, hasProjector, page, limit } = req.query;

  try {
    const where = {};

    if (capacityMin) {
      const capacity = parseInt(capacityMin);
      if (!isNaN(capacity)) {
        where.capacity = { [Op.gte]: capacity };
      }

      const rooms = await Rooms.findAll({ where });

      return res.status(200).json({
        rooms,
      });
    }

    if (page && limit) {
      if (!verifyInt(page) || !verifyInt(limit)) {
        return res.status(400).json({ message: "Bad Request" });
      }

      const pageNum = parseInt(page);
      const limitNum = parseInt(limit);
      const offset = (pageNum - 1) * limitNum;

      const rooms = await Rooms.findAll({
        limit: limitNum,
        offset: offset,
      });

      return res.status(200).json({
        rooms,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: rooms.length,
        },
      });
    }

    if (hasProjector !== undefined) {
      where.hasProjector = {
        [Op.eq]: hasProjector === "true" || hasProjector === true,
      };

      const rooms = await Rooms.findAll({ where });

      return res.status(200).json({
        rooms,
      });
    }

    const rooms = await Rooms.findAll();

    res.status(200).json({
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

const setRoom = async (req, res, next) => {
  try {
    const { name, capacity, hasProjector } = req.body;

    if (!name || capacity <= 0) {
      return res.status(422).json({ message: "Unprocessable Entity" });
    }

    const room = await Rooms.create({
      name: name,
      capacity: capacity,
      hasProjector: hasProjector,
    });

    res.status(201).json({ room: room });
  } catch (err) {
    next(err);
  }
};

module.exports = { getRooms, setRoom };
