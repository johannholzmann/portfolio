import styles from "./footer.module.css";

import View from "../views/views";
import React from "react";
import Image from 'next/image';

const width_icons = 50;
function Footer() {
    return (
        <div className={styles.footer_container}>
            <footer className={styles.footer}>
                <div style={{ backgroundColor: 'sa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div xs={2} sm={1}>
                        <a href="https://www.linkedin.com/in/johann-holzmann/" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons8-linkedin-circled-240.png" width={width_icons} height={width_icons} />
                        </a>
                    </div>
                    <div xs={2} sm={1}>
                        <a href="https://github.com/johannholzmann" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons8-github-240.png" width={width_icons} height={width_icons} />
                        </a>
                    </div>
                    <div xs={2} sm={1}>
                        <a href="mailto:johannholzmann@hotmail.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/icons8-envelope-96.png" width={width_icons} height={width_icons} />
                        </a>
                    </div>
                </div>
                <div>
                    <div sm={12} className={styles.col_views}>
                        <View />
                    </div>
                </div>
                <div>
                    <div sm={12} className={styles.col_copyright}>
                        {'Copyright © Portfolio '}
                        {new Date().getFullYear()}
                    </div>
                </div>
            </footer>
        </div>
    );
}

/*
function Footer() {
    return (
        <div className={styles.footer_container}>
            <footer className={styles.footer}>
                <Row style={{ backgroundColor: 'sa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Col xs={2} sm={1}>
                        <a href="https://www.linkedin.com/in/johann-holzmann/" target="_blank" rel="noopener noreferrer">
                            <Image src="icons8-linkedin-circled-240.png" width={width_icons} />
                        </a>
                    </Col>
                    <Col xs={2} sm={1}>
                        <a href="https://github.com/johannholzmann" target="_blank" rel="noopener noreferrer">
                            <Image src="icons8-github-240.png" width={width_icons} />
                        </a>
                    </Col>
                    <Col xs={2} sm={1}>
                        <a href="mailto:johannholzmann@hotmail.com" target="_blank" rel="noopener noreferrer">
                            <Image src="icons8-envelope-96.png" width={width_icons} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className={styles.col_views}>
                        <View />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className={styles.col_copyright}>
                        {'Copyright © Portfolio '}
                        {new Date().getFullYear()}
                    </Col>
                </Row>
            </footer>
        </div>
    );
}
*/
export default Footer;