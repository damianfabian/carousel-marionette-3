import Bb from 'backbone'

/*
* In case to have a API I would use this function with async/await 
* to return the data from the Endpoint and create the Collection

import Config from 'config'

async function getImages () {
    return await fetch(Config.API.GET_IMAGES)
}

*/

function getImages () {
    return new Bb.Collection([
        { 
            images: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhlJbv3-rMAEBSfcbDy2oijzk6ExNJDWwmlhfrBbxBLIqR-tjuQ',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgtjydGqcS1K7mpRydS04DzJ19gc_kReJe53ltzHHlN0WXUey',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5SMjIzy4iTg71MKUf3AyroN4wTnqrTSBjHf5-iYiAWESJnWU'
            ],
            title: 'Este es un Block 1' 
        },
        { 
            images: [
                'http://www.port.ac.uk/media/contacts-and-departments/pbs/research/groups-and-themes/Sports-finance-and-governance.jpg',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSeQUF0reqRm2cTo82GqbV477tDUhPD-wPcxdSXgtWj3wQgzLb2',
                'http://ctvsportsnet.ca/uploads/sports2.serendipityThumb.jpg'
            ],
            title: 'Este es un Block 2' 
        },
        { 
            images: [
                'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1tPq-a4MvGo5X5C-2vaaP0FKOYE0Gh7kRH_BmPHTKfcvYUox4Ig',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_N2OS_zuhYdMMFJFBEx8YOkpy6jAADkW7XCCMJloTE-lv6PRMHw',
                'http://events.ergonomics.org.uk/wp-content/uploads/2017/03/athletes.jpg'
            ],
            title: 'Este es un Block 3' 
        },
        { 
            images: [
                'http://www.port.ac.uk/media/contacts-and-departments/pbs/research/groups-and-themes/Sports-finance-and-governance.jpg',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSeQUF0reqRm2cTo82GqbV477tDUhPD-wPcxdSXgtWj3wQgzLb2',
                'http://ctvsportsnet.ca/uploads/sports2.serendipityThumb.jpg'
            ],
            title: 'Este es un Block 4' 
        },
        { 
            images: [
                'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1tPq-a4MvGo5X5C-2vaaP0FKOYE0Gh7kRH_BmPHTKfcvYUox4Ig',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_N2OS_zuhYdMMFJFBEx8YOkpy6jAADkW7XCCMJloTE-lv6PRMHw',
                'http://events.ergonomics.org.uk/wp-content/uploads/2017/03/athletes.jpg'
            ],
            title: 'Este es un Block 5' 
        },
        { 
            images: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhlJbv3-rMAEBSfcbDy2oijzk6ExNJDWwmlhfrBbxBLIqR-tjuQ',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgtjydGqcS1K7mpRydS04DzJ19gc_kReJe53ltzHHlN0WXUey',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5SMjIzy4iTg71MKUf3AyroN4wTnqrTSBjHf5-iYiAWESJnWU'
            ],
            title: 'Este es un Block 6' 
        },
        { 
            images: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhlJbv3-rMAEBSfcbDy2oijzk6ExNJDWwmlhfrBbxBLIqR-tjuQ',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgtjydGqcS1K7mpRydS04DzJ19gc_kReJe53ltzHHlN0WXUey',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5SMjIzy4iTg71MKUf3AyroN4wTnqrTSBjHf5-iYiAWESJnWU'
            ],
            title: 'Este es un Block 7' 
        },
        { 
            images: [
                'http://www.port.ac.uk/media/contacts-and-departments/pbs/research/groups-and-themes/Sports-finance-and-governance.jpg',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSeQUF0reqRm2cTo82GqbV477tDUhPD-wPcxdSXgtWj3wQgzLb2',
                'http://ctvsportsnet.ca/uploads/sports2.serendipityThumb.jpg'
            ],
            title: 'Este es un Block 8' 
        },
        { 
            images: [
                'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1tPq-a4MvGo5X5C-2vaaP0FKOYE0Gh7kRH_BmPHTKfcvYUox4Ig',
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_N2OS_zuhYdMMFJFBEx8YOkpy6jAADkW7XCCMJloTE-lv6PRMHw',
                'http://events.ergonomics.org.uk/wp-content/uploads/2017/03/athletes.jpg'
            ],
            title: 'Este es un Block 9' 
        }
    ])
}

export default {
    getImages: getImages
}