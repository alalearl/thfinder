/**
 * define a database JSON
 */
const json = require("./db.json");

/**
 * Function for get provinces data
 * @return { Array<{code: Number, name: String}> }
 */
exports.provinces = () => getProvinces();

/**
 * Function for get Cities data
 * @param { String | Number} province province name or province code
 * @return { Array<{code: Number, name: String}> }
 */
exports.cities = (province = null) => getCitiesByProvince(province);

/**
 * Function for get District Data
 * @param { String | Number } city city name or city code
 * @param { String | Number} province province name or province code
 * @return { Array<{code: Number, name: String }> }
 */
exports.districts = (city = null, province = null) =>
  getDistrictByData(city, province);

/**
 * Function for get Zip codes data
 * @param { String | Number } district district name or district data
 * @param { String | Number } city city name or city code
 * @param { String | Number} province province name or province code
 * @return { Array<Number> }
 */
exports.zipCodes = (district = null, city = null, province = null) =>
  getZipCodeByData(district, city, province);

/**
 * Function get all data from province name or province code
 * !! not recommended to use this function because of data size !!
 * @param { String | Number } province
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
exports.getFromProvince = (province = null) => getDataFromProvince(province);

/**
 * Function get all data from city name or city code
 * @param { String | Number } city
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
exports.getFromCity = (city = null) => getDataFromCity(city);

/**
 * Function get all data from district name or district code
 * @param { String | Number } district
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
exports.getFromDistrict = (district = null) => getDataFromDistrict(district);

/**
 * Function get all data from zip code
 * @param { Number } zipCode
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
exports.getFromZipCode = (zipCode = null) => getDataFromZipCode(zipCode);

/**
 * =================================================================================
 * This Code Below is a logic to find data
 * =================================================================================
 */

/**
 * Function for get provinces data
 * @return { Array<{code: Number, name: String}> }
 */
const getProvinces = () => {
  return uniq_array(
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
  return result.map((th) => ({ name: th.amphoe, code: th.amphoe_code }));
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
  json.filter((th) => th.zipcode === zipCode).map(parseDataFromJson);

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
    .map(parseDataFromJson);

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
    .map(parseDataFromJson);

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
    .map(parseDataFromJson);

/**
 * =================================================================================
 * This Code Below is For logic utilities
 * That usually uses in library
 * =================================================================================
 */

/**
 *
 * @param { { district: String, district_code: Number, amphoe: String, amphoe_code: Number, province: String, province_code: Number, zipcode: Number } } data
 * @return { { district: String, districtCode: Number, city: String, cityCode: Number, province: String, provinceCode: Number, zipCode: Number } }
 */
const parseDataFromJson = (data) => ({
  district: data.district,
  districtCode: data.district_code,
  city: data.amphoe,
  cityCode: data.amphoe_code,
  province: data.province,
  provinceCode: data.province_code,
  zipCode: data.zipcode,
});

/**
 * Function for remove duplicate element in object
 * @param { any } a is a value of array
 */
const uniq_array = (a, isObject = false) => {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for (var i = 0; i < len; i++) {
    var item = isObject ? JSON.stringify(a[i]) : a[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = isObject ? JSON.parse(item) : item;
    }
  }
  return out;
};
