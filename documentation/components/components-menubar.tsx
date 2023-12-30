// Import core
// Import customs
import { AccessibilityTable } from '@/docs/components/accessibility-table';
import Preview from '@/docs/components/preview';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'design-system/components/menubar';

export const MenubarPreview = () => (
  <Preview>
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </Preview>
);

export const MenubarAccessibility = () => {
  const menubarAccessibilityData = [
    {
      key: 'Space',
      description: (
        <>
          When focus is on{' '}
          <code className="cell-accessibility-code">MenubarTrigger</code>, opens
          the menubar and focuses the first item. When focus is on an item,
          activates the focused item.
        </>
      ),
    },
    {
      key: 'Enter',
      description: (
        <>
          When focus is on{' '}
          <code className="cell-accessibility-code">MenubarTrigger</code>, opens
          the associated menu. When focus is on an item, activates the focused
          item.
        </>
      ),
    },
    {
      key: 'ArrowDown',
      description: (
        <>
          When focus is on{' '}
          <code className="cell-accessibility-code">MenubarTrigger</code>, opens
          the associated menu. When focus is on an item, moves focus to the next
          item.
        </>
      ),
    },
    {
      key: 'ArrowUp',
      description:
        'When focus is on an item, moves focus to the previous item.',
    },
    {
      key: 'ArrowRight',
      description: (
        <>
          When focus is on a{' '}
          <code className="cell-accessibility-code">MenubarTrigger</code>, moves
          focus to the next item. When focus is on a{' '}
          <code className="cell-accessibility-code">MenubarSubTrigger</code>,{' '}
          opens or closes the submenu depending on reading direction. When focus
          is within a{' '}
          <code className="cell-accessibility-code">MenubarContent</code>, opens
          the next menu in the menubar.
        </>
      ),
    },
    {
      key: 'ArrowLeft',
      description: (
        <>
          When focus is on a{' '}
          <code className="cell-accessibility-code">MenubarTrigger</code>, moves
          focus to the previous item. When focus is on a{' '}
          <code className="cell-accessibility-code">MenubarSubTrigger</code>,{' '}
          opens or closes the submenu depending on reading direction. When focus
          is within a{' '}
          <code className="cell-accessibility-code">MenubarContent</code>, opens
          the next menu in the menubar.
        </>
      ),
    },
    {
      key: 'Esc',
      description: (
        <>
          Closes the currently open menu and moves focus to its{' '}
          <code className="cell-accessibility-code">MenubarTrigger</code>.
        </>
      ),
    },
  ];
  return <AccessibilityTable rows={menubarAccessibilityData} />;
};
