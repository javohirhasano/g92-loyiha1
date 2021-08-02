import "./style.css"
import { useState } from 'react'
import { useEffect } from 'react'

const getRandom = () => Math.floor(Math.random() * 100) + 1;

function QuizGame() {

    const getTrueAnswer = () => {
        return eval(`${a}${sign}${b}`)
    }

    const [a, seta] = useState(getRandom());
    const [b, setb] = useState(getRandom());
    const [sign, setSign] = useState(getRandom() % 2 == 1 ? '+' : '-');
    const [variants, setVariants] = useState([
        getTrueAnswer(),
        getRandom(),
        getRandom(),
        getRandom()
    ].sort(() => Math.random() - 0.5))
    const [selected, setSelected] = useState(-1);
    const [className, setClassName] = useState("");
    const [time, setTime] = useState(10)
    const [level, setLevel] = useState(1)
    const [statrtedTimeOut, setStartedTimeOut] = useState(null)


    console.log(a, b);

    const check = (v, i) => {
        setSelected(i);
        clearTimeout(statrtedTimeOut)
        if (getTrueAnswer() == v) {
            setClassName("succsess");
            setLevel(level + 1)
            setTime(time + 2)
        }
        else {
            setClassName("danger")
            setTime(time - 3 >= 0 ? time - 3 : 0)
        }
        setTimeout(() => { next() }, 400)
    }
    const next = async () => {
        seta(getRandom())
        setb(getRandom())
        setSign(getRandom() % 2 == 1 ? '+' : '-')
        setSelected(-1)

    }

    useEffect(() => {
        setVariants([
            getTrueAnswer(),
            getRandom(),
            getRandom(),
            getRandom()
        ].sort(() => Math.random() - 0.5))
    }, [a, b, sign])
    useEffect(() => {
        if (time > 0) {
            const t = setTimeout(() => setTime(time - 1), 1000)
            setStartedTimeOut(t)
        }
        else {

        }
    }, [time])

    return (
        <div>
            <div className="QuizGame">
                <div>
                    <h1 className="level">Level {level}</h1>
                </div>
                <div className="col-md-12"><h1 className="raqam">
                    {time}</h1>

                </div>
                <div className="loading">
                    <div className="LoadingColor" >

                    </div>
                </div>
                <div className="Example">
                    <h1 className="son">{a}{sign} {b}=..?</h1>
                </div>
                <div className="row">
                    {variants.map((v, i) => <button
                        className={`col-md-3 Cards btn ${i == selected && className}`}
                        key={i} onClick={() => check(v, i)}
                    >
                        {v}
                    </button>)}


                </div>
            </div>
        </div>
    )
}
export default QuizGame;