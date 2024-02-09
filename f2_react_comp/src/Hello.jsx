function Hello(){
    var name1='Vineet';
    let fullname = () => {
        return name1
    }
    return <h3>{fullname()}. simple hello message</h3>
}

export default Hello;