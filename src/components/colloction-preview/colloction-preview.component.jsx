import { Component } from "react";

import { ColloctionItems } from "../colloction-items/colloction-items.component";

import '../colloction-preview/colloction-preview.styles.scss';

export class ColloctionPreview extends Component {
    render() {
        return (
            <>
                <div className="collection-preview">
                    <div className="title">Heading</div>
                    <div className="preview " >
                        <ColloctionItems />
                    </div>
                </div>

            </>
        )
    }
}