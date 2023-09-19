cargo build --release --target aarch64-linux-android
mkdir -p ../../android/app/src/main/jniLibs/arm64-v8a/
cp ./target/aarch64-linux-android/release/libcrab.so ../../android/app/src/main/jniLibs/arm64-v8a/
