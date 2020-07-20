const finder = require("./finder");

/**
 * Function for get provinces data
 * @return { Array<{code: Number, name: String}> }
 */
exports.provinces = () => finder.getProvinces();

/**
 * Function for get Cities data
 * @param { String | Number} province province name or province code
 * @return { Array<{code: Number, name: String}> }
 */
exports.cities = (province = null) => finder.getCitiesByProvince(province);

/**
 * Function for get District Data
 * @param { String | Number } city city name or city code
 * @param { String | Number} province province name or province code
 * @return { Array<{code: Number, name: String }> }
 */
exports.districts = (city = null, province = null) =>
  finder.getDistrictByData(city, province);

/**
 * Function for get Zip codes data
 * @param { String | Number } district district name or district data
 * @param { String | Number } city city name or city code
 * @param { String | Number} province province name or province code
 * @return { Array<Number> }
 */
exports.zipCodes = (district = null, city = null, province = null) =>
  finder.getZipCodeByData(district, city, province);

/**
 * Function get all data from province name or province code
 * !! not recommended to use this function because of data size !!
 * @param { String | Number } province
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
exports.getFromProvince = (province = null) =>
  finder.getDataFromProvince(province);

/**
 * Function get all data from city name or city code
 * @param { String | Number } city
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
exports.getFromCity = (city = null) => finder.getDataFromCity(city);

/**
 * Function get all data from district name or district code
 * @param { String | Number } district
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
exports.getFromDistrict = (district = null) =>
  finder.getDataFromDistrict(district);

/**
 * Function get all data from zip code
 * @param { Number } zipCode
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
exports.getFromZipCode = (zipCode = null) => finder.getDataFromZipCode(zipCode);
