/**
 * Created by lidongliang on 2016/5/26.
 */
'use strict';

var MyClass_5 = React.createClass({displayName: "MyClass_5",
    getInitialState: function () {
        return {opacity: 1}
    },
    componentDidMount: function () {
        var timer = setInterval(function () {
            var opac = this.state.opacity;
            if (opac > 0)opac -= 0.05; else opac = 1;
            this.setState({opacity: opac})
        }.bind(this), 100)
    },
    render: function () {
        return (
            React.createElement("div", {style: {opacity:this.state.opacity,backgroundColor:'red'}}, 
                "aaaaaaaaaaaaaaa"
            )
        )
    }

})
ReactDOM.render(React.createElement(MyClass_5, null), document.getElementById('example5'))