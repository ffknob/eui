import React from 'react';
import { Link } from 'react-router';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';

import { EuiCode, EuiText, EuiSpacer } from '../../../../src/components';

import ColorPalette from './color_palette';
const colorPaletteSource = require('!!raw-loader!./color_palette');
const colorPaletteHtml = renderToHtml(ColorPalette);

import ColorPaletteQuant from './color_palette_quantitative';
const colorPaletteQuantSource = require('!!raw-loader!./color_palette_quantitative');
const colorPaletteQuantHtml = renderToHtml(ColorPaletteQuant);

import ColorPaletteCustom from './color_palette_custom';
const colorPaletteCustomSource = require('!!raw-loader!./color_palette_custom');
const colorPaletteCustomHtml = renderToHtml(ColorPaletteCustom);

export const ColorPaletteExample = {
  title: 'Color Palettes',
  intro: (
    <>
      <EuiText>
        <p>
          EUI provides a base set of color palettes that return an array of
          hexadecimal color for use in other EUI components or charts.
        </p>
      </EuiText>
      <EuiSpacer />
    </>
  ),
  sections: [
    {
      title: 'Preset qualitative palettes',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: colorPaletteSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: colorPaletteHtml,
        },
      ],
      text: (
        <div>
          <p>
            Qualitative palettes are best suited for communicating and comparing
            discrete data series. EUI recommends using the{' '}
            <EuiCode>euiPaletteColorBlind()</EuiCode> for qualitative and
            categorical data.
          </p>
          <p>
            This palette is restricted to only 10 colors. However, you can add
            more groups of 10 which are alternates of the original. This is
            better than allowing the initial set to loop.
          </p>
        </div>
      ),
      demo: <ColorPalette />,
      snippet: ['euiPaletteColorBlind()', "euiPaletteColorBlind(3, 'group')"],
    },
    {
      title: 'Recommended quantitative palettes',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: colorPaletteQuantSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: colorPaletteQuantHtml,
        },
      ],
      text: (
        <div>
          <p>
            Quantitative palettes are best suited for displaying data on a
            continuum, as in the case of health statuses and large geographic or
            demographic-based data sets.
          </p>
          <p>
            EUI provides the following common palettes for quantitative data and{' '}
            <Link to="/elastic-charts/creating-charts">charts</Link>. Just pass
            in the number of steps needed and the function will interpolate
            between the colors.
          </p>
        </div>
      ),
      demo: <ColorPaletteQuant />,
    },
    {
      title: 'Custom palettes',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: colorPaletteCustomSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: colorPaletteCustomHtml,
        },
      ],
      text: (
        <div>
          <p>
            Use the <EuiCode>colorPalette</EuiCode> service to generate a
            custom, gradiated palette array of any length from one or more
            hexadecimal color codes. The third parameter{' '}
            <EuiCode>divergent</EuiCode>, will interpolate between the two
            halves of the spectrums separately. If a middle point is not
            provided, it will graduate to light gray.
          </p>
        </div>
      ),
      demo: <ColorPaletteCustom />,
      snippet: [
        "colorPalette(['#fff'. '#000'], 11);",
        "colorPalette(['#fff'. '#000'], 11, divergent = true);",
      ],
    },
  ],
};
