import css from '../Filter/filter.module.css'
import PropTypes from 'prop-types';
export const Filter = ({ filter, onChange }) => {
    return (
        
        <label className={css.filterPart}>
        Filter contacts by name:
        <input type="text" value={filter} onChange={onChange} />
        </label>
    );
};
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};