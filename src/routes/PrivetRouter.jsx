import PropTypes from 'prop-types';

const PrivetRouter = ({children}) => {
    
    return (
        <div>
            {children}
        </div>
    );
};

PrivetRouter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivetRouter;