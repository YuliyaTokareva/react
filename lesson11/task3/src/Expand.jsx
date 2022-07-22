import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ onClick, isOpen, children, title }) => {
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={onClick}>
                    {isOpen ? (
                        <i className="fas fa-chevron-up"></i>
                    ) : (
                        <i className="fas fa-chevron-down"></i>
                    )}
                </button>
            </div>

            <div className="expand__content">{children}</div>
        </div>
    );
};
// Dialog.propTypes = {
//     isOpen: PropTypes.bool,
//     children: PropTypes.element.isRequired,
//     title: PropTypes.string,
//     onClose: PropTypes.func.isRequired,
// };
// Dialog.defaultProps = {
//     isOPen: false,
//     title: '',
// };

export default Expand;

///Первое прохождение
//////нажали на кнопку Show
// ----constructor,
// ----render(),
// ----componentDidMount;

//Второе прохождение
/////После нажатия кнопки 'Update'
// ----shouldComponentUpdate();
// ----render();
// ----componentDidUpdate()

// После нажатия кнопки 'Hide'
// ----componentWillUnmount()
