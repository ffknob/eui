import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../../test/required_props';

import { EuiDualRange } from './dual_range';

jest.mock('../form_row/make_id', () => () => 'generated-id');

const props = {
  onChange: () => {},
};

describe('EuiDualRange', () => {
  test('is rendered', () => {
    const component = render(
      <EuiDualRange
        name="name"
        id="id"
        value={['1', '8']}
        {...props}
        {...requiredProps}
      />
    );

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    test('disabled should render', () => {
      const component = render(
        <EuiDualRange {...props} value={['1', '8']} disabled />
      );

      expect(component).toMatchSnapshot();
    });

    test('fullWidth should render', () => {
      const component = render(
        <EuiDualRange {...props} value={['1', '8']} fullWidth />
      );

      expect(component).toMatchSnapshot();
    });

    test('compressed should render', () => {
      const component = render(
        <EuiDualRange {...props} value={['1', '8']} compressed />
      );

      expect(component).toMatchSnapshot();
    });

    test('labels should render', () => {
      const component = render(
        <EuiDualRange {...props} value={['1', '8']} showLabels />
      );

      expect(component).toMatchSnapshot();
    });

    test('ticks should render', () => {
      const component = render(
        <EuiDualRange
          {...props}
          value={['1', '8']}
          showTicks
          tickInterval={20}
        />
      );

      expect(component).toMatchSnapshot();
    });

    test('custom ticks should render', () => {
      const component = render(
        <EuiDualRange
          {...props}
          value={[20, 100]}
          showTicks
          ticks={[{ label: '20kb', value: 20 }, { label: '100kb', value: 100 }]}
        />
      );

      expect(component).toMatchSnapshot();
    });

    test('range should render', () => {
      const component = render(
        <EuiDualRange {...props} showRange value={[1, 8]} />
      );

      expect(component).toMatchSnapshot();
    });

    test('inputs should render', () => {
      const component = render(
        <EuiDualRange
          name="name"
          id="id"
          value={['1', '8']}
          showInput
          {...props}
          {...requiredProps}
        />
      );

      expect(component).toMatchSnapshot();
    });

    test('slider should display in popover', () => {
      const component = render(
        <EuiDualRange
          name="name"
          id="id"
          value={['1', '8']}
          showInput="inputWithPopover"
          {...props}
          {...requiredProps}
        />
      );

      expect(component).toMatchSnapshot();
    });

    test('levels should render', () => {
      const component = render(
        <EuiDualRange
          levels={[
            {
              min: 0,
              max: 20,
              color: 'danger',
            },
            {
              min: 20,
              max: 100,
              color: 'success',
            },
          ]}
          value={['1', '8']}
          onChange={() => {}}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });

  test('allows value prop to accept numbers', () => {
    const component = render(<EuiDualRange value={[1, 8]} {...props} />);

    expect(component).toMatchSnapshot();
  });

  test('allows value prop to accept empty strings', () => {
    const component = render(<EuiDualRange value={['', '']} {...props} />);

    expect(component).toMatchSnapshot();
  });
});
