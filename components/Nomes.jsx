export default ({ objs }) => {
    return (
        <div>
            {objs.map(obj => {
                return <div>
                    <div>{obj.nome}</div>
                    <button>X</button>
                </div>
            })}
        </div>
    )
}