const MenuItem = ({name,link,img}) => {
    return (<li><img src={img} alt={name} /><a href={link}>{name}</a></li>)     
}

export default MenuItem