/**
 * VENOM OS — Execution Stream Component Primitive
 * 
 * STRICT COMPLIANCE REQUIREMENT 8:
 * Zero fabricated telemetry, fake GPU metrics, or hallucinated AI latencies.
 * Displays clearly labelled mock preview data only when in preview mode.
 */

import type { ExecutionStreamProps } from '../../types/components.ts';

export function renderExecutionStreamHTML(props: ExecutionStreamProps): string {
  return `
    <div class="vnm-stream-container" id="${props.id}">
      ${props.isPreviewMode ? `
        <div class="vnm-preview-disclaimer">
          <span>⚡ [PREVIEW MODE // MOCK DATA ONLY — NO LIVE TELEMETRY]</span>
          <span>STATIC DEMONSTRATION</span>
        </div>
      ` : ''}

      <div class="vnm-stream-header">
        <div class="vnm-stream-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          <span>${props.streamTitle}</span>
        </div>
        <span class="vnm-badge">${props.isPreviewMode ? 'SAMPLE EXECUTION' : 'IDLE'}</span>
      </div>

      <div class="vnm-stream-body">
        ${props.commandExecuted ? `
          <div>
            <div class="vnm-label" style="margin-bottom: 6px;">Input Protocol:</div>
            <pre class="vnm-command-block"><code>${props.commandExecuted}</code></pre>
          </div>
        ` : ''}

        ${props.steps && props.steps.length > 0 ? `
          <div>
            <div class="vnm-label" style="margin-bottom: 6px;">Execution Trace (Simulated):</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${props.steps.map(step => `
                <div class="vnm-stream-step">
                  <span class="vnm-step-marker">▶</span>
                  <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                      <span style="font-weight: 500;">${step.title}</span>
                      <span class="vnm-mono" style="font-size: 11px; color: var(--vnm-text-alloy);">${step.timestamp}</span>
                    </div>
                    ${step.details ? `<p style="font-size: 13px; color: var(--vnm-text-titanium); margin-top: 2px;">${step.details}</p>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${props.synthesisOutput ? `
          <div>
            <div class="vnm-label" style="margin-bottom: 6px;">Structured Output:</div>
            <div class="vnm-command-block" style="color: var(--vnm-text-specular); font-size: 13px; line-height: 1.5;">
              ${props.synthesisOutput}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}
