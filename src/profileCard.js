function ProfileCard({title,handel,image,discribtion}){
   
    return(
        <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is1by1">
                    <img src={image} alt="pda logo"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media-content">
                       <p className="title is-4">{title}</p>
                       <p className="subtitle is-6">{handel}</p>
                       <p className="content">{discribtion}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default ProfileCard ;