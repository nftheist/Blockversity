import PropTypes from 'prop-types';

export default function LoginButton ({ children, onClick }) {
    return(
        <div className="buttons" onClick={onClick}>
            <button className="btn_nav btn-15">
                <span>{children}</span>
            </button>
        </div>
    )
}

LoginButton.propTypes = { // prop validation is required 
  onClick: PropTypes.func.isRequired, // validating that this is function
  children: PropTypes.node.isRequired, // And this can be anythung renderable object
};
