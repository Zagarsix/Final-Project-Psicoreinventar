import "../styles/CardClient.css";


const CardClient =({img, imgLabel, clientsName, clientsAge, review})=>{
    return(
        <div class="card w-75" id="cardId">
        <div class="row">
            <div class="col-md-4">
            <img src={img}
            alt={imgLabel}
            class="center" 
            id="cardImg"
            />
            </div>
            <div class="col-md-8 d-flex">
            <div class="card-body" id="cardBodyId">
            <div className="col-md-6">
            <strong>{clientsName}, {clientsAge}</strong>
            </div>
            <div className="col-md-4" >
            <img src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg" alt="star" />
            <img src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg" alt="star" />
            <img src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg" alt="star" />
            <img src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg" alt="star" />
            <img src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg" alt="star" />
            </div>
            <p class="card-text">{review}</p>
            </div>
            </div>
            </div>
            </div>
    )
}

export default CardClient;
