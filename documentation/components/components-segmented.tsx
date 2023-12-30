// Import core
import { Grid, List } from 'lucide-react';
// Import customs
import { AccessibilityTable } from '@/docs/components/accessibility-table';
import Preview from '@/docs/components/preview';
import {
  Segmented,
  SegmentedContent,
  SegmentedList,
  SegmentedTrigger,
} from 'design-system/components/segmented';

export const SegmentedPreview = () => (
  <Preview>
    <Segmented defaultValue="grid">
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list">List</SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid">Grid view.</SegmentedContent>
      <SegmentedContent value="list">List view.</SegmentedContent>
    </Segmented>
  </Preview>
);

export const SegmentedDefault = () => (
  <Preview>
    <Segmented defaultValue="grid">
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list">List</SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid">Grid view.</SegmentedContent>
      <SegmentedContent value="list">List view.</SegmentedContent>
    </Segmented>
  </Preview>
);

export const SegmentedDefaultValue = () => (
  <Preview>
    <Segmented defaultValue="list">
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list">List</SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid">Grid view.</SegmentedContent>
      <SegmentedContent value="list">List view.</SegmentedContent>
    </Segmented>
  </Preview>
);

export const SegmentedDisabled = () => (
  <Preview>
    <Segmented defaultValue="grid">
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list" disabled>
          List
        </SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid">Grid view.</SegmentedContent>
      <SegmentedContent value="list">List view.</SegmentedContent>
    </Segmented>
  </Preview>
);

export const SegmentedWithIcon = () => (
  <Preview>
    <Segmented defaultValue="grid">
      <SegmentedList>
        <SegmentedTrigger value="grid">
          <Grid />
        </SegmentedTrigger>
        <SegmentedTrigger value="list">
          <List />
        </SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid">Grid view.</SegmentedContent>
      <SegmentedContent value="list">List view.</SegmentedContent>
    </Segmented>
  </Preview>
);

export const SegmentedAccessibility = () => {
  const segmentedAccessibilityData = [
    {
      key: 'Tab',
      description:
        'When focus moves onto the tabs, focuses the active trigger. When a trigger is focused, moves focus to the active content.',
    },
    {
      key: 'ArrowRight',
      description:
        'Moves focus to the next trigger and activates its associated content.',
    },
    {
      key: 'ArrowLeft',
      description:
        'Moves focus to the previous trigger and activates its associated content.',
    },
    {
      key: 'Home',
      description:
        'Moves focus to the first trigger and activates its associated content.',
    },
    {
      key: 'End',
      description:
        'Moves focus to the last trigger and activates its associated content.',
    },
  ];
  return <AccessibilityTable rows={segmentedAccessibilityData} />;
};
