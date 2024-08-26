import { useEffect } from "react";
import { MyDependenciesContainer } from "@public/style/DependencyInstall.styles";
import DependencyList from "@components/common/DependencyList";
import Loading from "@components/common/Loading";
import useUIStore from "@/store/uiStore";
import useDashboardStore from "@/store/dashboardStore";

const MyDependencies = ({ showModal }) => {
  const { loading, activeTab, setActiveTab, setLoading } = useUIStore(
    state => ({
      loading: state.loading,
      activeTab: state.activeTab,
      setActiveTab: state.setActiveTab,
      setLoading: state.setLoading
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
      try {
        if (projectPath) {
          setLoading(true);
        }

        const packageJsonData =
          await window.api.loadPackageJsonData(projectPath);

        if (packageJsonData) {
          setDependencies(packageJsonData.dependencies);
          setDevDependencies(packageJsonData.devDependencies);
        }
      } catch (error) {
        console.error(error);
        showModal("패키지를 검색하는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadPackageJson();
  }, [projectPath, setDependencies, setDevDependencies, setLoading]);

  const handleDeleteIconClick = async dependency => {
    try {
      if (!projectPath) {
        showModal("현재 설정된 프로젝트 경로가 없습니다.");
        return;
      }
      setLoading(true);

      await window.api.uninstallDependencies({
        projectPath,
        packageName: dependency.name
      });

      const updatedPackageJsonData =
        await window.api.loadPackageJsonData(projectPath);
      setDependencies(updatedPackageJsonData.dependencies);
      setDevDependencies(updatedPackageJsonData.devDependencies);
    } catch (error) {
      console.error(error);
      showModal(`${dependency.packageName} 삭제에 실패 했습니다.`);
    } finally {
      setLoading(false);
    }
  };

  if (loading.isLoading) {
    return (
      <Loading
        noSpinner={false}
        customStyles={true}
        loadingMessages={[
          "패키지를 불러오고 있습니다 ...",
          "Loading packages..."
        ]}
      />
    );
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
              onDelete={handleDeleteIconClick}
            />
          )}
          {activeTab === "devDependencies" && (
            <DependencyList
              dependencies={Object.entries(devDependencies)}
              onDelete={handleDeleteIconClick}
            />
          )}
        </li>
      </ul>
    </MyDependenciesContainer>
  );
};

export default MyDependencies;
