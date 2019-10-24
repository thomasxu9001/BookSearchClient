import React, {Component} from 'react';
import './Footer.less';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


interface StateProps {
    totalPage: number
    currentPage: number
    onPageChange: Function
}

interface State {

}


export type Props = StateProps;

export class PaginationFooter extends Component<Props, State> {

    render() {
        const {onPageChange, totalPage, currentPage} = this.props;
        const isFirstPage = (currentPage === 1);
        const isLastPage = (currentPage === totalPage);
        let pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);
        }

        return (
            <div className="paginationFooterContainer">
                <div className={isFirstPage ? "pageSelect disabled" : "pageSelect"} onClick={() => {
                    if (isFirstPage) return;
                    onPageChange(currentPage - 1);
                }}>
                    Prev<FontAwesomeIcon className="chevronLeft" icon="chevron-left"/>
                </div>
                {pages.map(page =>
                    <div className={(currentPage === page) ? "pageSelect active" : "pageSelect"} onClick={() => {
                        if ((currentPage === page)) return;
                        onPageChange(page)
                    }}>
                        <span>{page}</span>
                    </div>
                )}
                <div className={isLastPage ? "pageSelect disabled" : "pageSelect"} onClick={() => {
                    if (isLastPage) return;
                    onPageChange(currentPage + 1);
                }}>
                    Next<FontAwesomeIcon className="chevronRight" icon="chevron-right"/>
                </div>
            </div>
        );
    }


}

export default PaginationFooter;



