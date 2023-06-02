import {IProduct} from "../types/Product";

export const productsMock: IProduct[]= [
    {
        id: 1,
        categoryId: 5,
        name: 'Браслет 🇺🇦',
        description: 'Підходить жінкам і чоловікам',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/294631099_568225301501520_508446326158536789_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=DhJNPvHG7lcAX_XMoNQ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NjM1ODYwNzczMDM0NzY5Nw%3D%3D.2-ccb7-5&oh=00_AT-PHdyOoHbjrSeRpqzGQVKvqGvZcIQkhPKDcyoD8pZ01g&oe=6351B407&_nc_sid=30a2ef',
            },
            {
                id:2,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/294386086_176979814799676_5998283357758187146_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=qJqOdDfm52IAX-kas8w&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NjM1ODYwNzk0ODYzMDMzNw%3D%3D.2-ccb7-5&oh=00_AT_OhvB62yKhZjBuR9eY24I0i3lgD9JaPMcmlegQY7oX0g&oe=6350EE1F&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 650,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 3,
                        value: '1.84'
                    },
                    {
                        id:4,
                        attributeId: 4,
                        value: '16-22'
                    },
                ],
            }
        ]
    },
    {
        id: 2,
        categoryId: 2,
        name: 'Сережки-протяжки з тризубом',
        description: 'Також є в позолоті',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/285499489_1107296079850680_6622609151401766975_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-aDsxFerrHcAX82f5BG&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MzE5NzY0NDE0MzY4NjY4OQ%3D%3D.2-ccb7-5&oh=00_AT9MYVTsZJz_ZkvurbGQToOv7pQ3LbzxCh25wup8BsfVJw&oe=6351F58C&_nc_sid=30a2ef',
            },
            {
                id:2,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/285373305_1161627584675950_5316235358518857271_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=uLZXaZwVmY0AX8IfLM6&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MzE5NzY0NDAzNDU2NjAxNQ%3D%3D.2-ccb7-5&oh=00_AT-AcuNjl2tZZTjm-AAP-QtZDmOOFLY0u3Vr4YjIik1Cvg&oe=635170F4&_nc_sid=30a2ef',
            },
            {
                id:3,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/285396636_432007205411388_5733444747062986274_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vC9AURnHf3MAX8YI-1-&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MzE5NzY0NDEyNjg2MTEyMA%3D%3D.2-ccb7-5&oh=00_AT-sebmL5OGUj53ObOI51KcoN8E10u8JF_wvABbor-MR8w&oe=6350862F&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 490,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 3,
                        value: '0.39'
                    },
                ],
            }
        ]
    },
    {
        id: 3,
        categoryId: 4,
        name: 'Підвіска Ukraine 🇺🇦',
        description: 'Довжина регулюється',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/285218672_155601273661445_7943831838369059531_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=b2V5MeXXLZsAX-YXjbB&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MTk1MTM0MTE3OTE1NjQ4MQ%3D%3D.2-ccb7-5&oh=00_AT9VKxIO5T174zYtePdkD9uP7zoMEZ5zjdDSvILFUOE2Bg&oe=63517488&_nc_sid=30a2ef',
            },
            {
                id:2,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/285379322_548294593492592_6766266481723664984_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=IizmJwxw5YgAX8Gv5F_&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MTk1MTM0MTE2MjI0MDQxMQ%3D%3D.2-ccb7-5&oh=00_AT8iFm-M970y7BUzL_QyWCNSEKALv2eCNEboNRvgTPlOwg&oe=635104B2&_nc_sid=30a2ef',
            },
            {
                id:3,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/285837132_690828199035008_4285927688811118270_n.jpg?stp=dst-jpg_e15_p640x640&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=x8T8rAbNdvIAX_5Zvkk&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MTk0MTI1MTgwMzIxMDgzMg%3D%3D.2-ccb7-5&oh=00_AT-uxFl-9rUwK3dtPkzSVlwiw4mqnznlfGr3lU1N9eGmIA&oe=63507362&_nc_sid=30a2ef',
            },
            {
                id:4,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/285437987_345433950998886_3639326585714591282_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LbAKvaLmVv8AX_hWOFz&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MTk1MTM0MTE3OTEyODU3OQ%3D%3D.2-ccb7-5&oh=00_AT8ostjbqx7EpGa1Pes3AR-U9005MqS8fbsjUOCvRLpPCg&oe=63519BEC&_nc_sid=30a2ef',
            },
            {
                id:5,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/285384754_174066051681125_7202051763618671118_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ZyC8a0xGFJ4AX9jBsn0&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1MTk1MTM0MTE4NzM5NzM2OA%3D%3D.2-ccb7-5&oh=00_AT_1ztiBbrFRYST8EfkxIM8ei0Zxy502udfQiR5OCZOq_w&oe=6351929A&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 650,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 4,
                        value: '2.15'
                    },
                    {
                        id:4,
                        attributeId: 5,
                        value: '40-45'
                    },
                ],
            },
             {
                id:2,
                price: 700,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 3,
                        value: '2.15'
                    },
                    {
                        id:4,
                        attributeId: 5,
                        value: '40-45'
                    },
                    {
                        id:5,
                        attributeId: 6,
                        value: 'Позолота'
                    },
                ],
            },
        ]
    },
    {
        id: 4,
        categoryId: 2,
        name: 'Сережки',
        description: '',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/310598545_508262271117804_5364950753688649593_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=7YagfpQ6LbsAX_aGvDp&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MzY4ODM3NjcwNjc5MDg4NQ%3D%3D.2-ccb7-5&oh=00_AT8Aya3cc8xzC3e_CF7hIuhJzYw4mwPY4wAi5i9gcfYOpA&oe=63521C01&_nc_sid=30a2ef',
            },
            {
                id:2,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/310797459_860125145363198_3732075421841993320_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=mHSvFap3FrQAX-Df41Q&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MzY4ODM3NjUzMDU3NjM5Mg%3D%3D.2-ccb7-5&oh=00_AT_ffoWDRleboz7MK2GKHP5HLQnz2K6nMX3ceyTXmvn-kw&oe=63521397&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 480,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 4,
                        value: '2.15'
                    },
                    {
                        id:4,
                        attributeId: 5,
                        value: '20'
                    },
                    {
                        id:5,
                        attributeId: 6,
                        value: 'Родій'
                    },
                ],
            }
        ]
    },
    {
        id: 5,
        categoryId: 5,
        name: 'Браслет',
        description: '',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/310522926_582026747034643_1121705086367766250_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=5Ba6iU5QLmYAX8GWdzT&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MjI1NjY1NzI0NDA1NTMzNA%3D%3D.2-ccb7-5&oh=00_AT9BIvAsUvPYWs9kYZ7Vr8DvS1Tbc38-hewfvwMekKALAQ&oe=6350C3F1&_nc_sid=30a2ef',
            },
            {
                id:2,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/310443613_181641934426095_6753546256205631666_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jAT6AFbB-oUAX8e4iRB&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MjI1NjY1NzIyNzA3NTM5Mg%3D%3D.2-ccb7-5&oh=00_AT_KEwiUxsQtcAhpoc4-keEPhW44uHoYfCbs7O05jhq3uw&oe=6350C4C1&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 460,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 4,
                        value: '3.97'
                    },
                    {
                        id:4,
                        attributeId: 5,
                        value: '16-17'
                    },
                    {
                        id:5,
                        attributeId: 6,
                        value: 'Родій'
                    },
                ],
            }
        ]
    },
    {
        id: 6,
        categoryId: 2,
        name: 'Сережки',
        description: '',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/310485830_615177936812569_7423646567969975302_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=omA0PAUaTlIAX8T_T0Q&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MTUxNzg1NDQ3Njc1NjI0NA%3D%3D.2-ccb7-5&oh=00_AT-XQVRGBzRFy37dxNgkKT7uCLSVrpyDlE8c-L4O-hLg5A&oe=63525AA9&_nc_sid=30a2ef',
            },
            {
                id:2,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/310468512_1076468403034953_1769466506175745031_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=1hJ_YQW_aMAAX8YthKL&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MTUxNzg1NDQ3NjczODI1Mw%3D%3D.2-ccb7-5&oh=00_AT-LqsrntkLUcsuS-8wDoJvi3e4YSiimN8Fz-nn2bb5HsA&oe=63524ABC&_nc_sid=30a2ef',
            },
            {
                id:3,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/310347966_626077849134251_8670893690168370249_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=rq_HNkTitAwAX965iaA&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MTUxNzg1NDY2MTE1MDYyMQ%3D%3D.2-ccb7-5&oh=00_AT9g__KWRkfeseofjv9mVI3fPaBqKXGPhqvRbREVVLiFXA&oe=635169AA&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 450,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 4,
                        value: '2.48'
                    },
                    {
                        id:4,
                        attributeId: 5,
                        value: '15'
                    },
                    {
                        id:5,
                        attributeId: 6,
                        value: 'Родій'
                    },
                ],
            }
        ]
    },
    {
        id: 7,
        categoryId: 6,
        name: 'Комплект',
        description: 'Довжина ланцюжка на вибір',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/309680999_671930337691118_2777550912164453588_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=QyLV0k2_XBgAX8otyyB&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MDEyNjEwMDAyMDIyODU4NA%3D%3D.2-ccb7-5&oh=00_AT_0UdXOBM20O0fRw-JaXIK358c8Ph_cUZVsAGsNDGRkfA&oe=6350807B&_nc_sid=30a2ef',
            }
        ],
        variant: [
            {
                id:1,
                price: 1320,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 6,
                        value: 'Родій'
                    },
                    {
                        id:4,
                        attributeId: 5,
                        value: '40; 45'
                    },
                ],
            }
        ]
    },
    {
        id: 8,
        categoryId: 2,
        name: 'Сережки ',
        description: '',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/309612449_804620703996758_5559570698570447507_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=OXGKLvOzUBAAX-5hKh3&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzNzk4NjIzNTM3NTcwODYyNQ%3D%3D.2-ccb7-5&oh=00_AT8VFhDmsCU05MygRRGpT7TO51_U1UQ9g88wfHQton2eDg&oe=6350895B&_nc_sid=30a2ef',
            },
            {
                id:2,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/309294662_644491920594270_1303481193146577748_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=kYv2Ei5dWsQAX9wYHyr&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzNzk4NjIzNTQ2NzkwNDYxNA%3D%3D.2-ccb7-5&oh=00_AT9tgYiodRF_HVO4gG1Kkw4QtTAAGuf_Y-ia8zrDddfQiA&oe=6351CA11&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 320,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 6,
                        value: 'Родій'
                    },
                    {
                        id:4,
                        attributeId: 7,
                        value: '5'
                    },
                    {
                        id:5,
                        attributeId: 3,
                        value: '0.76'
                    },
                ],
            }
        ]
    },
    {
        id: 9,
        categoryId: 2,
        name: 'Браслет',
        description: 'Довжина регулюється',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/309091774_818045315900467_585968662440578197_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=kLBpuDR41hsAX9VV9Fq&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzNzk2MTIxNjEwOTE1MDY1MA%3D%3D.2-ccb7-5&oh=00_AT-h6gbigZa3lYJJHooNqn34ek8r6O1649-wVbO7M8ppYw&oe=6350C9C6&_nc_sid=30a2ef',
            },
            {
                id:2,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/309225668_1176738916213298_6108115909848114033_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=YQYhuwCquOcAX96WZQ_&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzNzk2MTIxNTk1Nzk3NzE0Mw%3D%3D.2-ccb7-5&oh=00_AT9AxsIwKFNhcN2vcbVZTnABBPoEE6s7qGGASGiZ0IeV_Q&oe=63508896&_nc_sid=30a2ef',
            },
            {
                id:3,
                src: 'https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/309980432_403966555258626_7932088985947682348_n.jpg?stp=dst-jpg_e15_p640x640&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=zLDvKSp1t7cAX-4vIq9&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzNzk2MDU3NTE3NzU2MTYzNw%3D%3D.2-ccb7-5&oh=00_AT9LZ0kc9Yn-fhZPkyVyvJTZn5QguNcS-QAVUBZOGzVYkA&oe=635252BE&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 600,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 3,
                        value: '1.62'
                    },
                    {
                        id:4,
                        attributeId: 5,
                        value: '16-20'
                    },
                ],
            }
        ]
    },
    {
        id: 10,
        categoryId: 2,
        name: 'Перстень Дуплекс',
        description: 'Інші розміри - під замовлення (виготовлення до 10 днів)',
        img: [
            {
                id:1,
                src: 'https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/309031100_604656564734743_6269385644482044208_n.jpg?stp=dst-jpg_e15_fr_p1080x1080&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=YjhXmGbHDiEAX_nXKGl&tn=rKW5NYj-AiMWtkuh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzNTEwMjA5NzI0MTA1OTU3MA%3D%3D.2-ccb7-5&oh=00_AT_tVjbjPzmP0t4ZM2ZY0l7SXWv0oO9Ca_hc4vV9C4TsoA&oe=6351B63F&_nc_sid=30a2ef',
            },
        ],
        variant: [
            {
                id:1,
                price: 850,
                discount: 0,
                amount: 10,
                attributes:[
                    {
                        id:1,
                        attributeId: 1,
                        value: 'Срібло'
                    },
                    {
                        id:2,
                        attributeId: 2,
                        value: '925'
                    },
                    {
                        id:3,
                        attributeId: 3,
                        value: '3.74'
                    },
                    {
                        id:4,
                        attributeId: 5,
                        value: '17'
                    },
                ],
            }
        ]
    },
]