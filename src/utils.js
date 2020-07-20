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

module.exports = { parseDataFromJson, uniq_array };
