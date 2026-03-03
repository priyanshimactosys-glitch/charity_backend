const serviceService = require("../services/service.service");

exports.createService = async (req, res, next) => {
  try {
    const result = await serviceService.createService(req.body);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

exports.getServices = async (req, res, next) => {
  try {
    const result = await serviceService.getServices(req.query);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

exports.getServiceById = async (req, res, next) => {
  try {
    const result = await serviceService.getServiceById(req.params.id);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateService = async (req, res, next) => {
  try {
    const result = await serviceService.updateService(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};