/* e1slint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx95bef93195ec2d0d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '20237e9e1d0dca7766f07f21f4db7c75',

  PROVINCE: '湖南',
  CITY: '岳阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '妹妹',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o771z6Ap3pqO0nKPEtU_kJjXFAjQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'N3IGdZxxiodKXxswW3esw5NGSGQbWosiLt3RPWpcHgY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-21',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小佳', year: '2020', date: '03-21',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2017', date: '12-18',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-12-18' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-12-15' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'rPwiRP-R6PATYC0gEQDrNsJU9uFmdKUzMk-ChNOihaQ',

  CALLBACK_USERS: [
    {
      name: '',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

