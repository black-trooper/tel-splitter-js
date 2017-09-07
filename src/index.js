class TelSplitter {
  split(tel, strict) {
    tel = tel.split('-').join('')
    for (let areaDigit = 5; areaDigit > 1; areaDigit--) {
      const areaCode = tel.substring(0, areaDigit)
      let cityDigit
      if (this.landPhoneAreaCode.indexOf(areaCode) >= 0) {
        cityDigit = 6 - areaDigit
      }
      if (!cityDigit) {
        if (strict) {
          cityDigit = this.otherPhoneStrictMap[areaCode]
        } else {
          cityDigit = this.otherPhoneMap[areaCode]
        }
      }
      if (cityDigit) {
        return [areaCode, tel.substring(areaDigit, areaDigit + cityDigit), tel.substring(areaDigit + cityDigit)]
      }
    }
    return [tel]
  }

  format(tel, strict) {
    if (!tel) {
      return tel
    }
    return this.split(tel, strict).join('-')
  }

  constructor() {
    this.landPhoneAreaCode = [
      '011',
      '0123',
      '0124',
      '0125',
      '0126',
      '01267',
      '0133',
      '0134',
      '0135',
      '0136',
      '0137',
      '01372',
      '01374',
      '01377',
      '0138',
      '0139',
      '01392',
      '01397',
      '01398',
      '0142',
      '0143',
      '0144',
      '0145',
      '01456',
      '01457',
      '0146',
      '01466',
      '015',
      '0152',
      '0153',
      '0154',
      '01547',
      '0155',
      '01558',
      '0156',
      '01564',
      '0157',
      '0158',
      '01586',
      '01587',
      '0162',
      '0163',
      '01632',
      '01634',
      '01635',
      '0164',
      '01648',
      '0165',
      '01654',
      '01655',
      '01656',
      '01658',
      '0166',
      '0167',
      '017',
      '0172',
      '0173',
      '0174',
      '0175',
      '0176',
      '0178',
      '0179',
      '018',
      '0182',
      '0183',
      '0184',
      '0185',
      '0186',
      '0187',
      '019',
      '0191',
      '0192',
      '0193',
      '0194',
      '0195',
      '0197',
      '0198',
      '022',
      '0220',
      '0223',
      '0224',
      '0225',
      '0226',
      '0228',
      '0229',
      '023',
      '0233',
      '0234',
      '0235',
      '0237',
      '0238',
      '024',
      '0240',
      '0241',
      '0242',
      '0243',
      '0244',
      '0246',
      '0247',
      '0248',
      '025',
      '0250',
      '0254',
      '0255',
      '0256',
      '0257',
      '0258',
      '0259',
      '026',
      '0260',
      '0261',
      '0263',
      '0264',
      '0265',
      '0266',
      '0267',
      '0268',
      '0269',
      '027',
      '0270',
      '0274',
      '0276',
      '0277',
      '0278',
      '0279',
      '028',
      '0280',
      '0282',
      '0283',
      '0284',
      '0285',
      '0287',
      '0288',
      '0289',
      '029',
      '0291',
      '0293',
      '0294',
      '0295',
      '0296',
      '0297',
      '0299',
      '03',
      '04',
      '042',
      '0422',
      '0428',
      '043',
      '0436',
      '0438',
      '0439',
      '044',
      '045',
      '046',
      '0460',
      '0463',
      '0465',
      '0466',
      '0467',
      '047',
      '0470',
      '0475',
      '0476',
      '0478',
      '0479',
      '048',
      '0480',
      '049',
      '0493',
      '0494',
      '0495',
      '04992',
      '04994',
      '04996',
      '04998',
      '052',
      '053',
      '0531',
      '0532',
      '0533',
      '0536',
      '0537',
      '0538',
      '0539',
      '054',
      '0544',
      '0545',
      '0547',
      '0548',
      '055',
      '0550',
      '0551',
      '0553',
      '0554',
      '0555',
      '0556',
      '0557',
      '0558',
      '0561',
      '0562',
      '0563',
      '0564',
      '0565',
      '0566',
      '0567',
      '0568',
      '0569',
      '0572',
      '0573',
      '0574',
      '0575',
      '0576',
      '05769',
      '0577',
      '0578',
      '058',
      '0581',
      '0584',
      '0585',
      '0586',
      '0587',
      '059',
      '0594',
      '0595',
      '0596',
      '0597',
      '05979',
      '0598',
      '0599',
      '06',
      '072',
      '0721',
      '0725',
      '073',
      '0735',
      '0736',
      '0737',
      '0738',
      '0739',
      '0740',
      '0742',
      '0743',
      '0744',
      '0745',
      '0746',
      '07468',
      '0747',
      '0748',
      '0749',
      '075',
      '076',
      '0761',
      '0763',
      '0765',
      '0766',
      '0767',
      '0768',
      '077',
      '0770',
      '0771',
      '0772',
      '0773',
      '0774',
      '0776',
      '0778',
      '0779',
      '078',
      '079',
      '0790',
      '0791',
      '0794',
      '0795',
      '0796',
      '0797',
      '0798',
      '0799',
      '082',
      '0820',
      '0823',
      '0824',
      '0826',
      '0827',
      '0829',
      '083',
      '0833',
      '0834',
      '0835',
      '0836',
      '0837',
      '0838',
      '08387',
      '08388',
      '08396',
      '084',
      '0845',
      '0846',
      '0847',
      '08477',
      '0848',
      '08512',
      '08514',
      '0852',
      '0853',
      '0854',
      '0855',
      '0856',
      '0857',
      '0858',
      '0859',
      '086',
      '0863',
      '0865',
      '0866',
      '0867',
      '0868',
      '0869',
      '087',
      '0875',
      '0877',
      '0879',
      '088',
      '0880',
      '0883',
      '0884',
      '0885',
      '0887',
      '0889',
      '089',
      '0892',
      '0893',
      '0894',
      '0895',
      '0896',
      '0897',
      '0898',
      '092',
      '0920',
      '093',
      '0930',
      '0940',
      '0942',
      '0943',
      '0944',
      '0946',
      '0947',
      '0948',
      '0949',
      '09496',
      '095',
      '0950',
      '0952',
      '0954',
      '0955',
      '0956',
      '0957',
      '0959',
      '096',
      '0964',
      '0965',
      '0966',
      '0967',
      '0968',
      '0969',
      '097',
      '0972',
      '0973',
      '0974',
      '0977',
      '0978',
      '0979',
      '098',
      '0980',
      '09802',
      '0982',
      '0983',
      '0984',
      '0985',
      '0986',
      '0987',
      '099',
      '09912',
      '09913',
      '0993',
      '0994',
      '0995',
      '0996',
      '09969',
      '0997'
    ]

    this.otherPhoneMap = {
      '020': 4, // その他
      '050': 4, // IP電話
      '070': 4, // 携帯電話/PHS
      '080': 4, // 携帯電話
      '090': 4, // 携帯電話
      '0120': 3, // その他
      '0800': 3, // その他
      '0570': 3, // その他
      '0990': 3, // その他
    }

    this.otherPhoneStrictMap = {
      '020': 3, // その他
      '050': 4, // IP電話
      '070': 3, // 携帯電話/PHS
      '080': 3, // 携帯電話
      '090': 3, // 携帯電話
      '0120': 3, // その他
      '0800': 3, // その他
      '0570': 3, // その他
      '0990': 3, // その他
    }
  }
}
module.exports = new TelSplitter()