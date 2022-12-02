const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const shoes = {
    '1': {
        'originalReleaseYear': '1985',
        'originalPrice': '$65',
        'designer': 'Peter Moore',
        'originalColorway:': 'Black/Red',
        'styleCode': '4281'
    },
    '2': {
        'originalReleaseYear': '1986',
        'originalPrice': '$100',
        'designer': 'Peter Moore/Bruce Kilgore',
        'originalColorway:': 'White/Red',
        'styleCode': '4361'
    },
    '3': {
        'originalReleaseYear': '1988',
        'originalPrice': '$100',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'White/Cement Gray, Black/Cement Gray',
        'styleCode': '4365'
    },
    '4': {
        'originalReleaseYear': '1989',
        'originalPrice': '$110',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'Black/Cement Gray, White/Fire Red - Black, Off White/Military Blue',
        'styleCode': '4363'
    },
    '5': {
        'originalReleaseYear': '1990',
        'originalPrice': '$125',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'Black/Black - Metallic Silver, White/Grape Ice - New Emerald, White/Fire Red - Black',
        'styleCode': '4281'
    },
    '6': {
        'originalReleaseYear': '1991',
        'originalPrice': '$125',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'Black/Black - Infrared, White/Carmine - Black, White/Infrared - Black, White/Sport Blue - Black',
        'styleCode': '4391'
    },
    '7': {
        'originalReleaseYear': '1992',
        'originalPrice': '$125',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'Black/Dark Charcoal - True Red, Black/Light Graphite - Bordeaux, White/Black - Cardinal Red, White/Light Silver - True Red, White/Midnight Navy/True Red',
        'styleCode': '130014-101'
    },
    '8': {
        'originalReleaseYear': '1993',
        'originalPrice': '$125',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'Black - Black - True Red, White/Black - True Red, Black/Bright Concor - Aqua Tone',
        'styleCode': '130169-040'
    },
    '9': {
        'originalReleaseYear': '1993',
        'originalPrice': '$125',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'Black/Dark Charcoal - True Red, Black/Light Olive - True Red, White/Black - Dark Powder Blue',
        'styleCode': '130182-100'
    },
    '10': {
        'originalReleaseYear': '1994',
        'originalPrice': '$125',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'White/Black - Dark Powder Blue, White/Black - Kelly - Yellow Gold, White/Black - Light Steel Gray',
        'styleCode': '130209-10'
    },
    '11': {
        'originalReleaseYear': '1995',
        'originalPrice': '$125',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'White/Black - Dark Concord, Black/True Red - White, Black/Dark Gray - True Red, White/Light Grey - Cobalt, White/Black - Navy',
        'styleCode': '130245-101'
    },
    '12': {
        'originalReleaseYear': '1996',
        'originalPrice': '$135',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'Black/ Varsity Red, White/Black - Taxi, White/Varsity Red - Black, Obsidian/White - French Blue, Black/Varsity Red - White - Metallic Silver',
        'styleCode': '130690-101'
    },
    '13': {
        'originalReleaseYear': '1997',
        'originalPrice': '$150',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'White/True Red - Black, Black/True Red - White, Black/Chutney Low, Black/True Red, Navy/Metallic Silver - Carolia Blue Low',
        'styleCode': '136002-062'
    },
    '14': {
        'originalReleaseYear': '1998',
        'originalPrice': '$150',
        'designer': 'Tinker Hatfield',
        'originalColorway:': 'White/Black - Oxidized Green, Black/Black/Varsity Red, Varsity Royal/Black - White LOw, Black/Black - WHite - Indigo, White/Obsidian - Columbia Blue Low, Light Ginger/Black - White Low',
        'styleCode': '136011-102'
    },
    'unknown': {
        'originalReleaseYear': '3001',
        'originalPrice': 'unknown',
        'designer': 'unknown',
        'originalColorway:': 'unknown',
        'styleCode': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=> {
    const number = req.params.name
    if(shoes[number]){
        res.json(shoes[number])
    } else {
        res.json(shoes['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})