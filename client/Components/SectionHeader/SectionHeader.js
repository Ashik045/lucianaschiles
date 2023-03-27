import styles from './sectionheader.module.scss';

function SectionHeader({ title }) {
    return (
        <div className={styles.section_header}>
            <div className={styles.section_header_left}>
                <div className={styles.s_h_l_line} />
                <div className={styles.s_h_l_circle} />
            </div>

            <h1>{title}</h1>

            <div className={styles.section_header_right}>
                <div className={styles.s_h_r_line} />
                <div className={styles.s_h_r_circle} />
            </div>
        </div>
    );
}

export default SectionHeader;
