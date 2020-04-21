function Title() {
    return(
    <h1 className="title">Markdown Playground</h1>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: props.placeholder
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            markdown: e.target.value,
        });
        $("#preview").html(marked($("#editor").val()));
    }


    render() {
        return (
            <div className="app">
                <Title />
                <div className="container">
                    <div className="editor-container">
                        <header className="editor-header">
                        &gt;&gt;Editor
                        </header>
                        <textarea 
                        id="editor" 
                        value={this.state.markdown}
                        onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="preview-container">
                        <header className="preview-header">
                        Preview
                        </header>
                        <div id="preview">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

$('document').ready(function() {
    const placeholder = 
`# Welcome to Markdown Playground
## Markdown is pretty simple markup language to format text

You can **bold a text !**

1. or
1. make
1. a list

or refer to a [link](https://github.com/revul93/)

embedding a computer code is simple as:
\`\`\`
function isCodeEmbedd(v) {
return true
}
\`\`\`
Another way is to embedd code inline \` document.write("Markdown is good"); \`

> it is fun to add blockquotes btw!

lastlay this is a photo of me:
![reVuL93Logo w/ Text](https://avatars3.githubusercontent.com/u/22988929?s=400&u=39791d57ea36f192c04da3c82b48955776a7d757&v=4)
`

    marked.setOptions({
    breaks: true
    })

    ReactDOM.render(<App placeholder={placeholder}/>, document.getElementById("react-container"));
    $("#preview").html(marked($("#editor").val()));
})