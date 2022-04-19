import React , {useState} from 'react'

export default function Textform(props) {
    const [text , setText] = useState("") ;
    //click
    const handleUpperCaseEvent = () => {
        let newText = text.toUpperCase() ;
        setText(newText) ;
    }

    //Lower
    const handleLowerCaseEvent = () => {
        let newText = text.toLowerCase() ;
        setText(newText) ;
    }

    //clear
    const handleClearTextEvent = () => {
        let newText = '' ;
        setText(newText) ;

    }

    //Remove all symbol
    const handleClearSymbolEvent = () => {
        const Regex =  /[0-9/A-Z/a-z/ /]/g; ;
        const letter = text.match(Regex) ;
        const res = letter.join('') ;
        setText(res) ;
    }

    //Filert Numbers 
    const handleFilterNUmberEvent = () => {
        const Number = /[0-9]+/g;
        const letterdata = text.match(Number) ;
        const result = letterdata.join(' ') ;
        setText(result) ;
    }

    //speak the message
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    //email finder
    const EmailFinder = () => {
        let email = /\S+@\S+\.\S+/g; 
        let newemail = text.match(email) ;
        let result = newemail.join(' , ') ;
        setText(result) ;
    }

    //Titlecase
    const handleTitleCasingEvent = () => {
         
        let words =  text.split(" ").map(word => {
            return word.charAt(0).toUpperCase()+word.slice(1);
        })
        let newText = words.join(" ");
        setText(newText);
    }

    //handle reversecasing
    const handleReverseCasingEvent = () => {
        Text = text.split("");
        let reverseText = Text.reverse().toString().replaceAll(",", "");
        setText(reverseText)
    }

    //click to copy
    const handleCopyEvent = () => {
        var text = document.getElementById("Messagearea");
        text.select();
        text.setSelectionRange(0, 9999999);
        navigator.clipboard.writeText(text.value);
    }


    // Click to Change the Color of Text Randomly
    const changeColor = (number) => {
        const color = ['red', 'blue', 'yellow', 'orange', 'green', 'black', 'pink', 'salmon', 'teal' , 'gold' , 'greenyellow'];
        document.getElementById('Messagearea').style.color = color[number];
    }

    //Change font size 
    const changFontSize = (number) => {
        const fontsize = [100 , 200 , 300 , 400 , 500 , 600 , 700 , 800 , 900];
        document.getElementById("Messagearea").style.fontWeight = fontsize[number]

    }

    //
    const handleOnChangeData = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='contaner'>
                <div className="form-group text-dark">
                    <label htmlFor="exampleFormControlTextarea1" className='mt-5 mb-2'> <h2> {props.heading} </h2> </label>
                    <textarea className="form-control" id="Messagearea" value={text} onChange={handleOnChangeData} rows="12"></textarea>
                </div>

                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={handleUpperCaseEvent}> uppercase </button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={handleLowerCaseEvent}> Lowercase </button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={handleClearTextEvent}> Clear Text </button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={handleClearSymbolEvent}> Clear Symbol </button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={handleFilterNUmberEvent}> Filer Number </button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={speak}>Speak Text</button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={EmailFinder}>Email Finder</button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={handleTitleCasingEvent}>TitleCase</button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={handleReverseCasingEvent}>Reversecase</button>
                <button className="btn btn-primary btn-block my-4 text-uppercase mx-3" onClick={handleCopyEvent}>Click to Copy</button>
                <button className="btn btn-primary mx-3 my-4" onClick={() => changeColor(Math.floor(Math.random() * 5))}>Change Color</button>
                <button className="btn btn-primary mx-1" onClick={() => changFontSize(Math.floor(Math.random() * 9))}>Change Font size</button>


            </div>

            <div className="container text-dark my-3">
                <h1 className='text-danger'> Your Text Summery </h1>
                <p>
                    <span className='text-danger'> {text.split(" ").length} </span> Words and <span className='text-danger'> {text.length} </span> Characters <br />
                    <span className='text-danger'>{0.008* text.split(" ").length}</span> Minutes Time to Read this by Words <br />
                    <span className='text-danger'> {0.002* text.length} </span> Minutes time to read by characters. 
                </p>
                <h2>Preview</h2>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
