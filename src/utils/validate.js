/**
 * element 表单验证
 * @param { Object } rule [验证规则]
 * @param { String, Number } value  [传递参数]
 * @param { Function } callback [回调函数]
 * 
 * @example:
 * ```js
 *  import { validPhone } from '@/utils/validate';
 *  rules: {
 *    phone: {
 *      required: true,
 *      trigger: 'blur',
 *      validator: validPhone
 *    }
 *  }
 * ```
 */

// 手机号验证
function isvalidPhone(str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}

export const validPhone = (rule, value, callback) => {
  if (!value){
    callback(new Error('请输入电话号码'))
  } else if (!isvalidPhone(value)){
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}