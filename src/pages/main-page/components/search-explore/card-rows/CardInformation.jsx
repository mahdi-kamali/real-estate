//  React Iconify
import { Icon, InlineIcon } from '@iconify/react';

// BootsTrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";

const CardInformation = (props) => {
    return (
        <div className="card-information">
            <div className="information-header">
                <h3><Icon icon="icon-park-outline:view-grid-detail" />Property Detail</h3>
                <h1>{props.card.info.cardName}</h1>
            </div>
            <div className="information-body">
                {props.card.propertyDetail.informationBody.rows.map((row, index) => {
                    return <Accordion className='information-row' key={index} defaultActiveKey="0">
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header className='row-header'>
                                <Icon icon={row.rowHeader.svg} />
                                {row.rowHeader.content}
                            </Accordion.Header>
                            <Accordion.Body className='row-body'>
                                {
                                    row.rowBody.items.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="item">
                                                <div className="item-header">
                                                    {item.itemHeader}
                                                </div>
                                                <div className="item-body">
                                                    <ul>
                                                        {item.itemBody.map((content, cotentIndex) => {
                                                            return (
                                                                <li key={cotentIndex}>{content}</li>
                                                            )

                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Accordion.Body>
                        </Accordion.Item >
                    </Accordion>
                })}

            </div>
        </div>
    )
}

export default CardInformation
