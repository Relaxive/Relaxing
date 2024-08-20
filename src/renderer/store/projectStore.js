import { create } from "zustand";

const useProjectStore = create(set => ({
  path: "",
  selectedPackageManager: "",
  projectName: "",
  files: [],
  projects: [],
  selectedSettingOption: "userDefined",
  isUserDefinedSetting: true,

  isProjectStarterValid: false,
  isDependenciesSelected: false,

  searchQuery: "",
  packageItems: [],
  selectedPackageItem: null,
  isDropdownVisible: false,
  isEnterPressed: false,

  setSelectedSettingOption: option =>
    set(state => ({
      selectedSettingOption: option,
      isUserDefinedSetting: option === "userDefined"
    })),

  setPath: path => {
    set(state => {
      const isProjectStarterValid =
        !!path && !!state.selectedPackageManager && !!state.projectName;
      return {
        path,
        isProjectStarterValid
      };
    });
  },

  setSelectedPackageManager: selectedPackageManager => {
    set(state => {
      const isProjectStarterValid =
        !!state.path && !!selectedPackageManager && !!state.projectName;
      return {
        selectedPackageManager,
        isProjectStarterValid
      };
    });
  },

  setProjectName: projectName => {
    set(state => {
      const isProjectStarterValid =
        !!state.path && !!state.selectedPackageManager && !!projectName;
      return {
        projectName,
        isProjectStarterValid
      };
    });
  },

  setFiles: files => set({ files }),

  setUserDefinedSetting: isUserDefined =>
    set({ isUserDefinedSetting: isUserDefined }),

  setDependenciesSelected: isSelected =>
    set({ isDependenciesSelected: isSelected }),

  setSearchQuery: query => set({ searchQuery: query }),
  setPackageItems: items => set({ packageItems: items }),
  setSelectedPackageItem: item => set({ selectedPackageItem: item }),
  setIsDropdownVisible: isVisible => set({ isDropdownVisible: isVisible }),
  setIsEnterPressed: isPressed => set({ isEnterPressed: isPressed }),

  setProjects: projects => set({ projects }),

  checkProjectPath: path => {
    return true;
  },

  resetProjectState: () =>
    set({
      path: "",
      selectedPackageManager: "",
      projectName: "",
      files: [],
      projects: [],
      isProjectStarterValid: false,
      isDependenciesSelected: false,
      searchQuery: "",
      packageItems: [],
      selectedPackageItem: null,
      isDropdownVisible: false,
      selectedSettingOption: "userDefined",
      isEnterPressed: false
    })
}));

export default useProjectStore;
