import React from 'react'
import TicketCard from '../components/TicketCard'

function Dashboard() {

    const tickets=[
        {
            category: 'q1 2022',
            color:'red',
            title: 'NFT Safety Video',
            owner: 'Anirdyhh',
            avatar: 'https://portfolioanirudh.netlify.app/static/media/picture.0d2ad14e.jpg',
            status:'done',
            priority:5,
            progress:30,
            description: 'Some descoaj djjdo aaojwsd ijsdfiojd iadfj ii sdfdj',
            timestamp:'2022-02-11T06:30:17+0000'
        },
        {
            category: 'q1 2022',
            color:'red',
            title: 'vali mamu valipu',
            owner: 'Anirdyhh',
            avatar: 'https://portfolioanirudh.netlify.app/static/media/picture.0d2ad14e.jpg',
            status:'stuck',
            priority:5,
            progress:30,
            description: 'Some descoaj djjdo aaojwsd ijsdfiojd iadfj ii sdfdj',
            timestamp:'2022-02-11T06:30:17+0000'
        },
        {
            category: 'q1 2022',
            color:'red',
            title: 'Something o ti',
            owner: 'Anirdyhh',
            avatar: 'https://portfolioanirudh.netlify.app/static/media/picture.0d2ad14e.jpg',
            status:'working on it',
            priority:5,
            progress:30,
            description: 'Some descoaj djjdo aaojwsd ijsdfiojd iadfj ii sdfdj',
            timestamp:'2022-02-11T06:30:17+0000'
        },
        {
            category: 'q2 2022',
            color:'blue',
            title: 'Something o titiitiitisdh',
            owner: 'Anirdyhh',
            // avatar: 'https://portfolioanirudh.netlify.app/static/media/picture.0d2ad14e.jpg',
            status:'done',
            priority:3,
            progress:70,
            description: 'Some descoaj djjdo aaojwsd ijsdfiojd iadfj ii sdfdj',
            timestamp:'2022-02-11T06:30:17+0000'
        }
    ]

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,225,255)',
      ]

    const uniqueCategories=[
        ...new Set(tickets?.map(({category})=>category))
    ]
    console.log(uniqueCategories);


  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Dashboard