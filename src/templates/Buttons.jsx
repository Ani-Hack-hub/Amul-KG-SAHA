import "../assets/static/buttons.css"

export function Button_1(){
    return <div className="button">
        <div className="fwd">
            <a href="/amul/bulk-2">➡️</a>
        </div>
    </div>
}
export function Button_2(){
    return <div className="button">
        <div className="fwd">
            <a href="/amul/bulk-3">➡️</a>
        </div>
        <div className="bwd">
            <a href="/amul/bulk-1">⬅️</a>
        </div>
    </div>
}
export function Button_3(){
    return <div className="button">
        <div className="bwd">
            <a href="/amul/bulk-2">⬅️</a>
        </div>
    </div>
}

// export default {Button_1, Button_2, Button_3 }