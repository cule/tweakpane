import {assert} from 'chai';
import {describe, it} from 'mocha';

import {PaneError} from '../misc/pane-error';
import {TestUtil} from '../misc/test-util';
import {Button} from '../model/button';
import {Disposable} from '../model/disposable';
import {ButtonView} from './button';

describe(ButtonView.name, () => {
	it('should dispose', () => {
		const doc = TestUtil.createWindow().document;
		const d = new Disposable();
		const v = new ButtonView(doc, {
			button: new Button('title'),
			disposable: d,
		});
		d.dispose();
		assert.throws(() => {
			// tslint:disable-next-line: no-unused-expression
			v.buttonElement;
		}, PaneError);
	});
});
