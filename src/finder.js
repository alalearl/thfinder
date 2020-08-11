/**
 * =================================================================================
 * This Code Below is a logic to find data
 * =================================================================================
 */

/**
 * =================================================================================
 * define a database JSON
 * =================================================================================
 */
const json = require("../assets/db.json");

/**
 * =================================================================================
 * define UTILS Function
 * =================================================================================
 */
const utils = require("./utils");

/**
 * Function for get provinces data
 * @return { Array<{code: Number, name: String}> }
 */
const getProvinces = () => {
  return utils.uniq_array(
    json.map((th) => ({ name: th.province, code: th.province_code })),
    true
  );
};

/**
 * Function for get Cities data
 * @param { String | Number} province province name or province code
 * @return { Array<{code: Number, name: String}> }
 */
const getCitiesByProvince = (province = null) => {
  let result = json;
  if (province) {
    result = result.filter((th) =>
      isNaN(province) ? th.province === province : th.province_code === province
    );
  }
  return utils.uniq_array(
    result.map((th) => ({ name: th.amphoe, code: th.amphoe_code })),
    true
  );
};

/**
 * Function for get District Data
 * @param { String | Number } city city name or city code
 * @param { String | Number} province province name or province code
 * @return { Array<{code: Number, name: String }> }
 */
const getDistrictByData = (city = null, province = null) => {
  let result = json;
  if (city) {
    result = result.filter((th) =>
      isNaN(city) ? th.amphoe === city : th.amphoe_code === city
    );
  }

  if (province) {
    result = result.filter((th) =>
      isNaN(province) ? th.province === province : th.province_code === province
    );
  }

  return result.map((th) => ({ name: th.district, id: th.district_code }));
};

/**
 * Function for get Zip codes data
 * @param { String | Number } district district name or district data
 * @param { String | Number } city city name or city code
 * @param { String | Number} province province name or province code
 * @return { Array<Number> }
 */
const getZipCodeByData = (district = null, city = null, province = null) => {
  let result = json;

  if (district) {
    result = result.filter((th) =>
      isNaN(district) ? th.district === district : th.district_code === district
    );
  }

  if (city) {
    result = result.filter((th) =>
      isNaN(city) ? th.amphoe === city : th.amphoe_code === city
    );
  }

  if (province) {
    result = result.filter((th) =>
      isNaN(province) ? th.province === province : th.province_code === province
    );
  }

  return result.map((th) => th.zipcode);
};

/**
 * Function get all data from zip code
 * @param { Number } zipCode
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
const getDataFromZipCode = (zipCode) =>
  json.filter((th) => th.zipcode === zipCode).map(utils.parseDataFromJson);

/**
 * Function get all data from district name or district code
 * @param { String | Number } district
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
const getDataFromDistrict = (district) =>
  json
    .filter((th) =>
      isNaN(district) ? th.district === district : th.district_code === district
    )
    .map(utils.parseDataFromJson);

/**
 * Function get all data from city name or city code
 * @param { String | Number } city
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
const getDataFromCity = (city) =>
  json
    .filter((th) =>
      isNaN(city) ? th.amphoe === city : th.amphoe_code === city
    )
    .map(utils.parseDataFromJson);

/**
 * Function get all data from province name or province code
 * @param { String | Number } province
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
const getDataFromProvince = (province) =>
  json
    .filter((th) =>
      isNaN(province)
        ? th.province === province
        : th.province_province === province
    )
    .map(utils.parseDataFromJson);

module.exports = {
  getDataFromProvince,
  getDataFromCity,
  getDataFromDistrict,
  getDataFromZipCode,
  getZipCodeByData,
  getDistrictByData,
  getCitiesByProvince,
  getProvinces,
};
