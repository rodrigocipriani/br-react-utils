import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Paginator extends Component {

    _renderPaginator = (totalPages, currentPage) => {
        let ret = [];
        for (let i = 1; i <= totalPages; i++) {
            const active = currentPage === i ? "active" : "";
            ret.push(<li key={i} onClick={() => this._handleChangePage(i)}
                         className={['waves-effect', active].join(' ')}><a href="#!">{i}</a>
            </li>);
        }
        return ret;
    };

    _handleChangePage = (pageNumber) => {
        this.props.onChangePage(pageNumber);
    };

    _nextPage = (currentPage, isFirstPage) => {
        if (!isFirstPage)
            this._handleChangePage(currentPage + 1);
    };

    _prevPage = (currentPage, isLastPage) => {
        if (!isLastPage)
            this._handleChangePage(currentPage - 1);
    };

    render() {

        const {totalPages, currentPage} = this.props;

        const isFirstPage = currentPage === 1;
        const isLastPage = currentPage === totalPages;

        return (
            <ul className="pagination center-align">
                <li onClick={() => this._prevPage(currentPage, isFirstPage)}
                    className={["", (isFirstPage ? 'disabled' : 'waves-effect')].join(' ')}>
                    <a href="#!"><i className="fa fa-chevron-left" aria-hidden="true"/></a>
                </li>
                {this._renderPaginator(totalPages, currentPage)}
                <li onClick={() => this._nextPage(currentPage, isLastPage)}
                    className={["", (isLastPage ? 'disabled' : 'waves-effect')].join(' ')}>
                    <a href="#!"><i className="fa fa-chevron-right" aria-hidden="true"/></a>
                </li>
            </ul>
        );
    }
}

Paginator.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired
};

Paginator.defaultProps = {
    totalPages: 0,
    currentPage: 1,
    onChangePage: null
};

export default Paginator;
