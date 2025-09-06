# Bowers School Website - Development Guidelines

## AI Assistant Guidelines

When given a prompt for this project, the AI assistant should:

### 1. **Check Necessary Files First**
Before implementing any changes, always:
- Review existing components and their structure
- Check package.json for installed dependencies
- Review the current file structure
- Understand the existing styling patterns and conventions

### 2. **Preserve Existing Functionality**
- Never break existing features when adding new ones
- Test changes incrementally
- Maintain backward compatibility
- Keep existing routing and navigation intact

### 3. **Development Approach - Phased Implementation**

#### Phase 1: Planning & Analysis
- Analyze the request thoroughly
- Break down complex tasks into smaller, manageable phases
- Present a clear implementation plan to the client
- Get approval before proceeding with major changes

#### Phase 2: Implementation
- Implement features incrementally
- Use existing components and patterns where possible
- Follow the established code style and conventions
- Create reusable components

#### Phase 3: Testing & Validation
- Test each feature after implementation
- Run development server to verify changes
- Check for console errors
- Ensure responsive design works across devices
- Validate with the client at each milestone

#### Phase 4: Integration
- Integrate new features with existing functionality
- Ensure smooth transitions and animations
- Maintain consistent UX across the application

## Project Setup

### Package Manager
- **Always use `yarn`** for all package installations and commands
- Never use npm for this project

### Core Dependencies
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Headless UI (@headlessui/react)
- Framer Motion
- Heroicons (@heroicons/react)

### Development Commands
```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

## Figma Integration
- **Figma MCP Server**: Connected at `http://127.0.0.1:3845/mcp`
- When implementing designs from Figma:
  - Use the Figma MCP tools to get design specifications
  - Extract colors, spacing, and typography from Figma
  - Maintain design consistency with Figma mockups
  - **IMPORTANT: Always download assets from Figma MCP when creating new components**
  - Use `mcp__figma-dev-mode-mcp-server__get_code` with `dirForAssetWrites` parameter to save assets to `/public`
  - Assets include images, icons, and SVGs that should be extracted and saved locally

## File Structure
```
bowerschool_website/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   └── DummyCard.tsx   # Example component
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
├── package.json        # Project dependencies
└── CLAUDE.md          # This file
```

## Best Practices

### Component Development
1. Create components in the `/components` directory
2. Use TypeScript for type safety
3. Implement responsive design using Tailwind's responsive utilities
4. Use Framer Motion for animations
5. Use Headless UI for accessible UI components

### Styling Guidelines
1. Use Tailwind CSS utility classes
2. Avoid inline styles unless necessary
3. Create consistent spacing using Tailwind's spacing scale
4. Maintain a cohesive color palette
5. Ensure dark mode compatibility where applicable

### State Management
1. Use React hooks for local state
2. Consider Context API for global state
3. Keep state as close to where it's needed as possible

### Performance
1. Use Next.js Image component for optimized images
2. Implement lazy loading where appropriate
3. Minimize bundle size by importing only what's needed
4. Use dynamic imports for large components

## Future Integrations
- Figma design system integration via MCP
- Database connections
- Authentication system
- CMS integration
- Analytics setup

## Testing Checklist
Before considering any feature complete:
- [ ] Component renders without errors
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Animations are smooth and performant
- [ ] Accessibility standards are met
- [ ] No console errors or warnings
- [ ] Code follows project conventions
- [ ] Feature works with existing functionality

## Communication Protocol
1. Always present implementation plans in phases
2. Get client approval before major changes
3. Test incrementally with the client
4. Document any deviations from the original plan
5. Provide clear status updates during development