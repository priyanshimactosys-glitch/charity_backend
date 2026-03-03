const Service = require("../models/service.model");

exports.createService = async (data) => {
  return await Service.create(data);
};

exports.getServices = async (queryParams) => {
  const { category, status, search } = queryParams;

  let filter = {};

  if (category) filter.category = category;
  if (status) filter.status = status;

  if (search) {
    filter.name = { $regex: search, $options: "i" };
  }

  return await Service.find(filter);
};

exports.getServiceById = async (id) => {
  const service = await Service.findById(id);

  if (!service) {
    throw new Error("Service not found");
  }

  return service;
};

exports.updateService = async (id, data) => {
  const service = await Service.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!service) {
    throw new Error("Service not found");
  }

  return service;
};