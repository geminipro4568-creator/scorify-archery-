import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Scorify app:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#09090D] text-white flex flex-col items-center justify-center p-6 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-purple-900/30 border border-purple-500/40 flex items-center justify-center text-purple-400 text-2xl font-bold">
            !
          </div>
          <div className="space-y-2 max-w-md">
            <h1 className="text-2xl font-bold tracking-tight">Something went wrong</h1>
            <p className="text-sm text-gray-400">
              Scorify encountered a temporary error while rendering.
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-purple-900/40"
          >
            Reload Scorify App
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
