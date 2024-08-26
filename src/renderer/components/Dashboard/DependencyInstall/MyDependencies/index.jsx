import { useEffect } from "react";
import { MyDependenciesContainer } from "@public/style/DependencyInstall.styles";
import DependencyList from "@components/common/DependencyList";
import Loading from "@components/common/Loading";
import useUIStore from "@/store/uiStore";
import useDashboardStore from "@/store/dashboardStore";

const MyDependencies = () => {
  const { activeTab, setActiveTab, isLoading, setActiveLoading } = useUIStore(
    state => ({
      activeTab: state.activeTab,
      setActiveTab: state.setActiveTab,
      isLoading: state.isLoading,
      setActiveLoading: state.setActiveLoading
    })
  );
  const {
    projectPath,
    dependencies,
    devDependencies,
    setDependencies,
    setDevDependencies
  } = useDashboardStore(state => ({
    projectPath: state.projectPath,
    dependencies: state.dependencies,
    devDependencies: state.devDependencies,
    setDependencies: state.setDependencies,
    setDevDependencies: state.setDevDependencies
  }));

  useEffect(() => {
    const loadPackageJson = async () => {
      if (projectPath) {
        setActiveLoading(true);

        const loadPackageJson =
          await window.api.loadPackageJsonData(projectPath);

        if (loadPackageJson) {
          setDependencies(loadPackageJson.dependencies);
          setDevDependencies(loadPackageJson.devDependencies);
        }

        setActiveLoading(false);
      }
    };

    loadPackageJson();
  }, [projectPath, setDependencies, setDevDependencies]);

  const handleIconClick = dependency => {
    console.log(`삭제 할 패키지: ${dependency.packageName}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MyDependenciesContainer>
      <ul>
        <li>
          <button
            className={activeTab === "dependencies" ? "active" : ""}
            onClick={() => setActiveTab("dependencies")}
          >
            dependencies
          </button>
          <button
            className={activeTab === "devDependencies" ? "active" : ""}
            onClick={() => setActiveTab("devDependencies")}
          >
            devDependencies
          </button>
        </li>
        <li>
          {activeTab === "dependencies" && (
            <DependencyList
              dependencies={Object.entries(dependencies)}
              onDelete={handleIconClick}
            />
          )}
          {activeTab === "devDependencies" && (
            <DependencyList
              dependencies={Object.entries(devDependencies)}
              onDelete={handleIconClick}
            />
          )}
        </li>
      </ul>
    </MyDependenciesContainer>
  );
};

export default MyDependencies;
