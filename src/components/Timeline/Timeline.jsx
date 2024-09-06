import { useState } from 'react'
import style from './timeline.module.scss'
import { Stack, Card, Carousel, Button } from 'react-bootstrap'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Timeline = () => {
  const [data, setData] = useState([
    {
      id: 1,
      picture: '/002.jpg',
      title: 'Fusce a magna pellentesque',
      text: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
      month: 'July',
      year: 2025
    },
    {
      id: 2,
      picture: '/001.jpg',
      title: 'Nunc bibendum felis in varius laoreet',
      text: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
      month: 'May',
      year: 2024
    },
    {
      id: 3,
      picture: '/003.jpg',
      title: 'Quisque sed ultricies justo',
      text: 'Feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et...',
      month: 'March',
      year: 2023
    },
    {
      id: 4,
      picture: '/006.jpg',
      title: 'Nullam elementum vestibulum',
      text: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
      month: 'أبريل',
      year: 2017
    },
    {
      id: 5,
      picture: '/002.jpg',
      title: 'Fusce a magna pellentesque',
      text: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
      month: 'July',
      year: 2025
    },
    {
      id: 6,
      picture: '/001.jpg',
      title: 'Nunc bibendum felis in varius laoreet',
      text: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
      month: 'May',
      year: 2024
    },
    {
      id: 7,
      picture: '/003.jpg',
      title: 'Quisque sed ultricies justo',
      text: 'Feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et...',
      month: 'March',
      year: 2023
    },
    {
      id: 8,
      picture: '/006.jpg',
      title: 'Nullam elementum vestibulum',
      text: 'Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.',
      month: 'أبريل',
      year: 2017
    }
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(data.length)

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const CardComponent = ({ id, picture, title, text, month, year }) => {
    return (
      <div id={id} className="d-flex flex-column justify-content-center align-items-center ms-4">
        <Card style={{ width: '326px' }}>
          <Card.Body className="p-3">
            <Card.Img variant="top" src={picture} />
            <Card.Title className="fw-medium mb-2" style={{ fontSize: '16px' }}>
              {title}
            </Card.Title>
            <Card.Text className="mb-2">{text}</Card.Text>
            <Card.Link
              className="d-flex justify-content-start align-items-center link-underline link-underline-opacity-0"
              href="#"
            >
              <div className="ps-2">view all</div>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Card.Link>
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-center py-2">
          <div className="vr" style={{ height: '82px' }}></div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="fw-bold text-capitalize">{month}</div>
            <div className="fw-bold">{year}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="mb-5">
        <Stack direction="horizontal" gap={3} className="justify-content-between align-items-end px-5">
          <div className="d-flex align-items-end">
            <div className={[style.titleVr, 'rounded'].join(' ')}></div>
            <div className="pe-2 mb-0 h2">Financial sector development timeline</div>
          </div>
          <a
            className={[
              style.text,
              'd-inline-flex justify-content-between align-items-end link-underline link-underline-opacity-0'
            ].join(' ')}
          >
            <div className="ps-2">view all</div>
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </Stack>
        <div className="py-2 py-lg-3 px-5">
          <hr className="my-0" />
        </div>
        <div className="d-none d-lg-flex justify-content-end align-items-center px-5">
          <Button
            className={[
              style.buttons,
              'd-flex justify-content-center align-items-center bg-white rounded-2 text-secondary ms-2',
              currentIndex > 0 ? ' border-secondary' : ' text-opacity-50 border-secondary-subtle'
            ].join(' ')}
            onClick={prev}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>

          <Button
            className={[
              style.buttons,
              'd-flex justify-content-center align-items-center bg-white rounded-2 text-secondary',
              currentIndex < length ? ' border-secondary' : ' text-opacity-50 border-secondary-subtle'
            ].join(' ')}
            onClick={next}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </div>
      </div>
      <div className={[style.timeline, 'position-relative overflow-x-auto me-5 w-100'].join(' ')}>
        <div
          className={'d-flex justify-content-start'}
          style={{ transform: `translateX(+${currentIndex * (100 / 9)}%)` }}
        >
          {data.map((item) => (
            <CardComponent
              key={item?.id}
              id={item?.id}
              picture={item?.picture}
              title={item?.title}
              text={item?.text}
              month={item?.month}
              year={item?.year}
            />
          ))}
        </div>
        {/*<div className={[style.line, 'position-absolute'].join(' ')}></div>*/}
      </div>
    </div>
  )
}

export default Timeline
