import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './Pagination.css';

const Button = props => (
  <li>
    <button 
      onClick={props.onClick}
      disabled={props.disabled}
      className={classNames(
        "btn btn-sm",
        (props.active ? 'btn-success' : 'btn-default'),
        props.className
      )}>
      {props.children}
    </button>
  </li>
);

class Pagination extends Component {

  generatesPages (currentPage = 0, total, {
    rangeSize = 3,
    dots = false,
    borderNumbers = false
  } = {}) {
    rangeSize = rangeSize < 3 ? 3 : rangeSize;
    const steps = Math.ceil(rangeSize / 2);
    var start = currentPage - steps + 1;
    var end = currentPage + steps;

    if (rangeSize >= total) {
      start = 0;
      end = total;
    } else if (steps > currentPage) {
      start = 0;
      end = rangeSize;
    } else if ((currentPage + steps) >= total) {
      start = total - rangeSize;
      end = total;
    }

    const pagination = [...Array(end - start).keys()]
      .map(value => ({    
        label: start + value + 1,
        value: start + value,
        active: start + value === currentPage
      }));

    if(end < total - 1 && dots)
      pagination.push({
        value: '...',
        disabled: true,
      });

    if(start > 1 && dots)
      pagination.unshift({
        value: '...',
        disabled: true,
      });

    if(start > 0 && borderNumbers)
      pagination.unshift({
        label: 1,
        value: 0
      });

    if(end < total && borderNumbers)
      pagination.push({
        label: total,
        value: total - 1
      });

    return pagination;
  }

  render() {
    const {
      currentPage,
      actions,
      pages
    } = this.props;

    return (
      <ul className={classNames(styles.pagination, 'pagination')}>
        <Button 
          key="prev" 
          disabled={currentPage < 1}
          className="btn-transparent"
          onClick={actions.prevPage}>
            <i className="fa fa-chevron-left" />
        </Button>
        {this.generatesPages(currentPage, pages, {dots: true, borderNumbers: true})
          .map((item, index) => {
            return (
              <Button 
                key={index}
                className={classNames({
                  "btn-transparent": item.disabled
                })}
                disabled={item.disabled}
                active={item.active}
                onClick={!item.disabled && actions.selectPage.bind(null, item.value)}>
                {item.value === '...'
                  ? <i className="fa fa-ellipsis-h" /> 
                  : item.label}
              </Button>
            );
          })
        }
        
        <Button 
          key="next" 
          className="btn-transparent"
          disabled={currentPage >= pages - 1}
          onClick={actions.nextPage}>
            <i className="fa fa-chevron-right" />
        </Button>
      </ul>
    );
  }

}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination
