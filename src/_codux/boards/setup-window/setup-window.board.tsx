import React from 'react';
import { createBoard } from '@wixc3/react-board';
import SetupWindow from '../../../pages/SetupPage';

export default createBoard({
    name: 'SetupWindow',
    Board: () => <SetupWindow questions={[]}/>
});
