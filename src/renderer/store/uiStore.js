import { create } from "zustand";

const initialState = {
  searchQuery: "",
  packageItems: [],
  selectedPackageItem: null,
  activeModal: null,
  modalMessage: "",
  errorMessage: "",
  activeTab: "dependencies",
  uiFlags: {
    isDropdownVisible: false,
    isEnterPressed: false,
    isModalOpen: false,
    switchToggle: false
  },
  sections: {
    showSettingLoad: true,
    showProjectStarter: false,
    showFrameworkSelector: false,
    showVariantSelector: false,
    showDependenciesSelector: false
  },
  loading: {
    loadingMessages: [],
    currentLoadingMessageIndex: 0,
    isLoading: false
  },
  npmLoading: {
    isLoading: false,
    loadingMessages: [],
    currentLoadingMessageIndex: 0
  }
};

const useUIStore = create(set => ({
  ...initialState,

  setSearchQuery: query => set({ searchQuery: query }),
  setPackageItems: items => set({ packageItems: items }),
  setSelectedPackageItem: item => set({ selectedPackageItem: item }),

  setUIFlag: (flag, value) =>
    set(state => ({
      uiFlags: {
        ...state.uiFlags,
        [flag]: value
      }
    })),

  setSectionsVisibility: newVisibility =>
    set(state => ({
      sections: {
        ...state.sections,
        ...newVisibility
      }
    })),

  showModal: (modalType, message = "") =>
    set(() => ({
      uiFlags: {
        isModalOpen: true
      },
      activeModal: modalType,
      modalMessage: message
    })),

  closeModal: () =>
    set(() => ({
      uiFlags: {
        isModalOpen: false
      },
      activeModal: null,
      modalMessage: ""
    })),

  setErrorMessage: message => set({ errorMessage: message }),

  toggleSection: section =>
    set(state => ({
      sections: {
        ...state.sections,
        [section]: !state.sections[section]
      }
    })),

  setActiveTab: tabName => set({ activeTab: tabName }),

  setLoading: isLoading =>
    set(state => ({
      loading: {
        ...state.loading,
        isLoading
      }
    })),

  setNPMLoading: isLoading =>
    set(state => ({
      npmLoading: {
        ...state.npmLoading,
        isLoading
      }
    })),

  setLoadingMessages: messages =>
    set(state => ({
      loading: {
        ...state.loading,
        loadingMessages: messages
      }
    })),

  updateLoadingMessageIndex: () =>
    set(state => {
      const { loadingMessages, currentLoadingMessageIndex } = state.loading;
      if (!loadingMessages || loadingMessages.length === 0)
        return state.loading;

      const newIndex =
        (currentLoadingMessageIndex + 1) % loadingMessages.length;

      return {
        loading: {
          ...state.loading,
          currentLoadingMessageIndex: newIndex
        }
      };
    }),

  setNPMLoadingMessages: messages =>
    set(state => ({
      npmLoading: {
        ...state.npmLoading,
        loadingMessages: messages
      }
    })),

  resetLoadingMessageIndex: () =>
    set(state => ({
      loading: {
        ...state.loading,
        currentLoadingMessageIndex: 0
      }
    })),

  resetUIState: () => set(initialState)
}));

export default useUIStore;
