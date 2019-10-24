import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import s from './Footer.less';
import cx from 'classnames';

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
            <div className={s.paginationFooterContainer}>
                <div className={cx(isFirstPage && s.disabled, s.pageSelect)} onClick={() => {
                    if (isFirstPage) return;
                    onPageChange(currentPage - 1);
                }}>
                    Prev<FontAwesomeIcon className={s.chevronLeft} icon="chevron-left"/>
                </div>
                {pages.map(page =>
                    <div key={page} className={cx((currentPage === page) && s.active, s.pageSelect)} onClick={() => {
                        if ((currentPage === page)) return;
                        onPageChange(page)
                    }}>
                        <span>{page}</span>
                    </div>
                )}
                <div className={cx(isLastPage && s.disabled, s.pageSelect)} onClick={() => {
                    if (isLastPage) return;
                    onPageChange(currentPage + 1);
                }}>
                    Next<FontAwesomeIcon className={s.chevronRight} icon="chevron-right"/>
                </div>
            </div>
        );
    }


}

export default PaginationFooter;



