import React from "react";
import { create, act } from 'react-test-renderer';
import ActivityForm from "../ActivityForm";

describe(`Activity Form Testing`, () => {
    describe(`Activity Name input testing`, () => {
        it(`should update the value in name when onChange is fired`, () => {
            const testData = `Test Name`;
            const testInstance = create(<ActivityForm />);
            const activityForm = testInstance.root;

            const testInput = activityForm.findByProps({ activityName: `name` });
            expect(testInstance.props.value).toEqual(``);

            act(() => testInput.props.onChange({ target: { value: testData }}));

            expect(testInput.props.value).toEqual(testData)
        })
    })
})